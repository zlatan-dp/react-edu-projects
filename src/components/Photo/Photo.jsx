import './Photo.scss';
import { Collection } from './Collection/Collection';
import { useEffect, useState } from 'react';

const categories = [
  { name: 'Все' },
  { name: 'Море' },
  { name: 'Гори' },
  { name: 'Архітектура' },
  { name: 'Міста' },
];

function PhotoApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [collection, setCollection] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId ? `category=${categoryId}` : '';

    fetch(
      `https://655c7ca625b76d9884fd5d36.mockapi.io/photo-collections?page=${page}&limit=3&${category}`
    )
      .then(res => res.json())
      .then(json => {
        setCollection(json);
      })
      .catch(err => {
        console.log(err);
        alert('Помилка при отриманні даних');
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className="photo-app">
      <h1>Моя колекція фотографій</h1>
      <div className="top">
        <ul className="tags">
          {categories.map((obj, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? 'active' : ''}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Завантаження...</h2>
        ) : (
          collection
            .filter(obj =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className="pagination">
        {[...Array(5)].map((_, i) => (
          <li
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotoApp;
