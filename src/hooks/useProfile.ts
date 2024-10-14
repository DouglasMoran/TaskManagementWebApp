import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';

import { setProfile } from '@store/slices/task/taskSlice';
import { MainState, useAppDispatch } from '@store/index';

import { GET_PROFILE } from '@services/graphql/queries/users';

import { IUser } from '@interfaces/app';

interface QueryProfile {
  profile: IUser;
}

const useProfile = () => {
  const dispatch = useAppDispatch();

  const profile = useSelector((state: MainState) => state.task.profile);

  const {
    loading: isLoading,
    error,
    data,
  } = useQuery<QueryProfile>(GET_PROFILE);

  useEffect(() => {
    if (data?.profile) {
      dispatch(setProfile(data.profile));
    }
  }, [data, dispatch]);

  return {
    isLoading,
    error,
    profile,
  };
};

export default useProfile;
