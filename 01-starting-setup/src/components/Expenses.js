import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={props[0].title}
        amount={props[0].amount}
        date={props[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props[1].title}
        amount={props[1].amount}
        date={props[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props[2].title}
        amount={props[2].amount}
        date={props[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props[3].title}
        amount={props[3].amount}
        date={props[3].date}
      ></ExpenseItem>
    </div>
}

export default Expenses;