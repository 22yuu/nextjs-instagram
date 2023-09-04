'use client';
import useSWR from 'swr';

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR('/api/me');
  console.log(data);
  // 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
  // 로그인을 하면, 브라우저 자체적으로 요청을 하고 로그인이 성공하면 서버로부터 응답 헤더에 로그인이 되었다는 로그인 토큰이 들어가 있음
  // 2. 백엔드에서 현재 로그인된 사용자의 세션 정보를 이용해서
  // 3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴 (followings)
  // 4. 여기에서, 클라이언트 컴포넌트에서 followings의 정보를 UI에 보여줌
  //    ( image, username )

  return <div>Following Bar</div>;
}
