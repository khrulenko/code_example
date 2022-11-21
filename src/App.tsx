import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useAuth from './firebase/useAuth';
import { getUser, getIncomes } from './redux/store';
import useManageData from './firebase/useManageData';

const App = () => {
  const [email, emailSet] = useState<string>('');
  const [password, passwordSet] = useState<string>('');

  const [newAmount, newAmountSet] = useState<number>(0);
  const [newName, newNameSet] = useState<string>('');
  const [newCurrensy, newCurrensySet] = useState<string>('UAH');

  const { createUser, logIn, logOut } = useAuth();
  const user = useSelector(getUser);
  const { items: incomes, loading } = useSelector(getIncomes);

  // console.log('storedUser:', user);
  // console.log('storedIncomes:', incomes);
  console.log('loading:', loading);

  const { addIncome, listenToIncomesChanges, changeIncome, deleteIncome } =
    useManageData();

  useEffect(() => {
    const unsubscribe = listenToIncomesChanges();

    return unsubscribe;
  }, [user.uid]);

  const handleChange =
    (action: any) =>
    ({ target: { value } }: any) => {
      action(value);
    };

  const handleEmailChange = handleChange(emailSet);
  const handlePasswordChange = handleChange(passwordSet);

  const handleAmountChange = handleChange(newAmountSet);
  const handleNameChange = handleChange(newNameSet);
  const handleCurrensyChange = handleChange(newCurrensySet);

  const style = { border: '1px solid black', margin: '20px', padding: '10px' };
  const isThereUser = !!user?.uid;

  return (
    <>
      <h1>The Budget project</h1>
      <div style={{ display: 'flex' }}>
        <div style={style}>
          <h2>Sign UP</h2>

          {isThereUser ? (
            'user has been already signed in'
          ) : (
            <>
              <input
                style={{ display: 'block' }}
                type="text"
                id="email"
                onChange={handleEmailChange}
              />
              <input
                style={{ display: 'block' }}
                type="password"
                id="password"
                onChange={handlePasswordChange}
              />
              <button
                style={{ display: 'block' }}
                onClick={() => createUser(email, password)}
              >
                Sign up
              </button>
            </>
          )}
        </div>

        <div style={style}>
          <h2>Sign IN existing user</h2>

          {user.loading ? (
            <div>LOADING...</div>
          ) : isThereUser ? (
            <>
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
            </>
          ) : (
            <>
              <input
                style={{ display: 'block' }}
                type="text"
                id="logEmail"
                onChange={handleEmailChange}
              />
              <input
                style={{ display: 'block' }}
                type="password"
                id="logPassword"
                onChange={handlePasswordChange}
              />
              <button
                style={{ display: 'block' }}
                onClick={() => logIn(email, password)}
              >
                Sign in
              </button>
            </>
          )}
        </div>

        <div style={style}>
          <h2>Incomes list</h2>
          {isThereUser ? (
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
      </div>
    </>
  );
};

export default App;
