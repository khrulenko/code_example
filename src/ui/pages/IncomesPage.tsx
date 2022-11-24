import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleChange } from '../../common/utils';
import useAuth from '../../firebase/useAuth';
import useManageData from '../../firebase/useManageData';
import { getIncomes, getUser } from '../../redux/store';
import { URL_HOME } from '../../routing/URLs';

const IncomesPage = () => {
  const [newAmount, newAmountSet] = useState<number>(0);
  const [newName, newNameSet] = useState<string>('');
  const [newCurrensy, newCurrensySet] = useState<string>('UAH');

  const { logOut } = useAuth();
  const { addIncome, changeIncome, deleteIncome } = useManageData();

  const user = useSelector(getUser);
  const { items: incomes, loading } = useSelector(getIncomes);

  const handleAmountChange = handleChange(newAmountSet);
  const handleNameChange = handleChange(newNameSet);
  const handleCurrensyChange = handleChange(newCurrensySet);

  const style = { border: '1px solid black', margin: '20px', padding: '10px' };
  const isUserLoggedIn = !!user?.uid;

  return (
    <div style={style}>
      <div style={style}>
        <Link to={URL_HOME}>GO TO INCOMES</Link>
      </div>

      <div>
        <div>{user.uid}</div>
        <div>
          <b>{user.email}</b>
        </div>
        <div>user has been already signed in</div>
      </div>

      <button style={{ display: 'block' }} onClick={() => logOut()}>
        logOut
      </button>

      <h2>Incomes list</h2>
      {isUserLoggedIn ? (
        <>
          <input
            style={{ display: 'block' }}
            type="number"
            id="amount"
            onChange={handleAmountChange}
          />
          <input
            style={{ display: 'block' }}
            type="text"
            id="name"
            onChange={handleNameChange}
          />
          <select
            style={{ display: 'block', marginBottom: '20px' }}
            value={newCurrensy}
            name="currensy"
            onChange={handleCurrensyChange}
          >
            <option value="UAH">hryvnia</option>
            <option value="USD">dollar</option>
            <option value="EUR">euro</option>
          </select>
          <button
            onClick={() =>
              addIncome({
                amount: newAmount,
                name: newName,
                currensy: newCurrensy,
              })
            }
          >
            Add income
          </button>

          {loading ? (
            <div>LOADING...</div>
          ) : (
            <ol>
              {incomes.length
                ? incomes.map((income, i) => (
                    <li key={income.id}>
                      {income.amount} | {income.name} | {income.date}
                      <button onClick={() => deleteIncome(income.id)}>
                        delete
                      </button>
                      <button
                        onClick={() =>
                          changeIncome(income.id, {
                            amount: newAmount,
                            name: newName,
                            currensy: newCurrensy,
                          })
                        }
                      >
                        CHANGE
                      </button>
                      {income.id}
                    </li>
                  ))
                : 'there are no incomes'}
            </ol>
          )}
        </>
      ) : (
        'there is no user, please sign in'
      )}
    </div>
  );
};

export default IncomesPage;
