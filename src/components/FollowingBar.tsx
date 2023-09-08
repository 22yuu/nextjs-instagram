'use client';
import { DetailUser } from '@/model/user';
import { BeatLoader } from 'react-spinners';
import Link from 'next/link';
import useSWR from 'swr';
import Avartar from './Avartar';
import ScrollableBar from './ui/ScrollableBar';

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  // const users = data?.following;
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];
  console.log(data);
  // console.log(users);

  // 1. 클라이언트 컴포넌트에서 백엔드에게 api/me 사용자의 정보를 얻어옴
  // 로그인을 하면, 브라우저 자체적으로 요청을 하고 로그인이 성공하면 서버로부터 응답 헤더에 로그인이 되었다는 로그인 토큰이 들어가 있음
  // 2. 백엔드에서 현재 로그인된 사용자의 세션 정보를 이용해서
  // 3. 백엔드에서 사용자의 상세 정보를 Sanity에서 가지고 옴 (followings)
  // 4. 여기에서, 클라이언트 컴포넌트에서 followings의 정보를 UI에 보여줌
  //    ( image, username )

  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] relative z-0">
      {loading ? (
        <BeatLoader size={8} color="red" />
      ) : (
        !users || (users.length === 0 && <p>{`You don't have following`}</p>)
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              href={`/user/${username}`}
              className="flex flex-col items-center w-20 "
              key={username}
            >
              <Avartar image={image} highlight />
              <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                anna
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
