import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';

import { GET_ALL_USERS } from '@services/graphql/queries/users';

import { setUsers } from '@store/slices/task/taskSlice';
import { MainState, useAppDispatch } from '@store/index';

import { IUser } from '@interfaces/app';

interface QueryUser {
  users: IUser[];
}

const useUsers = () => {
  const dispatch = useAppDispatch();

  const { users } = useSelector((state: MainState) => state.task);

  const {
    loading: isLoading,
    error,
    data,
  } = useQuery<QueryUser>(GET_ALL_USERS);

  useEffect(() => {
    if (Array.isArray(data?.users)) {
      dispatch(setUsers(data.users));
    }
  }, [data, dispatch]);

  return {
    isLoading,
    error,
    users,
  };
};

export default useUsers;
