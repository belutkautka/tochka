import styles from './history.module.css'
import FilterButton from "./filters/filter-button.tsx";
import {useEffect, useState} from "react";
import {IEvent} from "../../mocks/handlers.ts";
import Event from "./event/event.tsx";
import Loading from "./loading/loading.tsx";


//TODO: добавить обработку ошибок, поработать с временем,
// чтоб корректно дата отображалась ( часовые пояса), стилизовать фильтры и добавить логику фильтрации,
// вынести логику со временем в другую компаненту, выексти цвета и тд в css переменные, отрефакторить названия
//PS: Тамаут для симулирования времени ответа сервера
function History() {
    const [events, setEvents] = useState<Array<IEvent>>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    useEffect(() => {
        setTimeout(() => {
            fetch('/api/events')
                .then((res) => {
                    setLoading(false);
                    res.json()
                        .then()
                        .then(value => value)
                        .then(data => data.data)
                        .then(data => {
                            if (events.length == 0) {
                                setEvents([])
                            }
                            data.map(event => {
                                const newEvent = {
                                    date: event.date,
                                    title: event.title,
                                    description: event.description,
                                    optionalDescription: event.optionalDescription,
                                    type: event.type,
                                    icon: event.icon,
                                    balance: event.balance,
                                    service: event.service
                                };
                                setEvents((prevEvents) => [...prevEvents, newEvent]);
                            })
                        })
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }, 1000); // 1000ms (1 second) timeout
    }, []);

    function groupBy(array, key) {
        return array.reduce((result, currentItem) => {
            const keyValue = currentItem[key];

            if (!result[keyValue]) {
                result[keyValue] = [];
            }

            result[keyValue].push(currentItem);

            return result;
        }, {});
    }

    const groupedData = groupBy(events, 'date');

    const today = new Date();

    function isToday(date) {
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    }

    function isTomorrow(date) {
        return date.getDate() === today.getDate() - 1 &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    }

    function getMonthName(date: Date): string {
        const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        return months[date.getMonth()] || 'Некорректный номер месяца';
    }


    return (
        <div className={styles.history}>
            <h1 className={styles.history__header}>История</h1>
            <div className={styles.history__content}>
                {!loading && <div className={styles.filters}>
                    <FilterButton text='Тип операции'/>
                    <FilterButton text='Период'/>
                    <FilterButton text='Счет'/>
                    <FilterButton text='Карта'/>
                </div>}
                {loading ? <Loading/> :
                    ((events.length == 0) ?
                            <div className={styles.dog__container}>
                                <img className={styles.dog} src={'../../../public/Illustration.svg'}
                                     alt="Ничего не найденно"/>
                                <div>Здесь будут все платежи и другие события.</div>
                                <div>Пока их нет.</div>
                            </div>
                            :
                            <>
                                <div className={styles.events}>
                                    {Object.keys(groupedData).map((date, index) =>
                                        <div key={index}>
                                            <div className={styles.date}> {(() => {
                                                const dt = new Date(date);
                                                if (isToday(dt)) {
                                                    return 'Сегодня, ' + dt.getDate() + " " + getMonthName(dt);
                                                } else if (isTomorrow(dt)) {
                                                    return 'Вчера, ' + dt.getDate() + " " + getMonthName(dt);
                                                } else {
                                                    return dt.getDate() + " " + getMonthName(dt);
                                                }
                                            })()}</div>
                                            {groupedData[date].map(event => <Event event={event}/>)}
                                        </div>)}
                                </div>
                                <div className={styles.end}>
                                    <div>Это — конец истоии.</div>
                                    <div>Других событий не было.</div>
                                </div>
                            </>
                    )
                }
            </div>

        </div>
    );
}

export default History;
