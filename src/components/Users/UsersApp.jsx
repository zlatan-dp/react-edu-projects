import './Users.scss';
import { Success } from './Comps/Success';
import { Users } from './Comps/UsersComps';
import { useEffect, useState } from 'react';

// Тут список пользователей: https://reqres.in/api/users

function UsersApp() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data);
      })
      .catch(err => {
        console.warn(err);
        alert('Помилка при отримуванні користувачів');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onChangeSearchValue = event => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = id => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <div className="UsersAppWrapp">
      <div className="UsersApp">
        {success ? (
          <Success count={invites.length} />
        ) : (
          <Users
            onChangeSearchValue={onChangeSearchValue}
            searchValue={searchValue}
            items={users}
            isLoading={isLoading}
            invites={invites}
            onClickInvite={onClickInvite}
            onClickSendInvites={onClickSendInvites}
          />
        )}
      </div>
    </div>
  );
}

export default UsersApp;
