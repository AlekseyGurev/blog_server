import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { loadPostsAsync } from '../../actions';
import { selectPosts } from '../../selectors';
import { Pagination, PostsItem, Search } from './components';
import { useState } from 'react';
import { PAGINATION_LIMIT } from '../../constants';
import styled from 'styled-components';
import { debounce } from './utils/debounce';

const PostsContainer = ({ className }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [shouldSearch, setShouldSearch] = useState(false);
  const posts = useSelector(selectPosts);

  const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    startDelayedSearch(!shouldSearch);
  };

  useEffect(() => {
    dispatch(loadPostsAsync(page, PAGINATION_LIMIT, searchPhrase));
  }, [dispatch, page, shouldSearch]);

  return (
    <div className={className}>
      <Search onChange={onSearch} searchPhrase={searchPhrase} />
      <div className="list-container">
        {posts.data?.posts.length ? (
          <ul className="items__list">
            {Object.values(posts.data.posts).map((post) => (
              <PostsItem key={post._id} post={post} />
            ))}
          </ul>
        ) : (
          <p>Посты не найдены</p>
        )}
      </div>
      {posts.data?.lastPage > 1 && (
        <Pagination
          page={page}
          setPage={setPage}
          lastPage={posts.data?.lastPage}
        />
      )}
    </div>
  );
};

export const Posts = styled(PostsContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .items__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding-left: 0;
    list-style-type: none;
  }

  .pagination {
    flex-shrink: 0;
    text-align: right;
  }
`;
