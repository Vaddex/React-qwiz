import css from "./MainPage.module.css";

const MainPage = () => {
    return (
        <div className={css.mainPage}>
            <h1>🎥 Вітаємо у Кіно Квізі!</h1>
            <p>Готові кинути виклик своєму кінознацтву?</p>
            {/* Тут можуть бути кнопки, карточки, навігація */}
        </div>
    );
};
export default MainPage;
