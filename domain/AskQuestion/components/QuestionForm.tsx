export const QuestionForm = () => {
    return (
        <form>
          <label htmlFor="userName">Имя</label>
          <input placeholder="Имя" name="userName" id="userName" />

          <label htmlFor="userPhoneNumber">Номер телефона</label>
          <input
            placeholder="+380"
            name="userPhoneNumber"
            id="userPhoneNumber"
          />

          <button type="submit">Перезвоните мне</button>
        </form>
    )
}