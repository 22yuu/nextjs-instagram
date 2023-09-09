'use client';

import React, { useState } from 'react';
import useSWR from 'swr';

export default function UserSearch() {
  // /api/search${keyword}
  // 검색하는 keyword가 있다면 /api/search/bob
  // 검색하는 keyword가 없다면 /api/serach -> 전체 유저
  const [keyword, setKeyword] = useState('');
  const { data, isLoading, error } = useSWR(`/api/search/${keyword}`);
  console.log(data);

  return <div></div>;
}
