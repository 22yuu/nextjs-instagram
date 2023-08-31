export default {
  title: 'User', // Sanity Studio에서 보이는 이름
  name: 'user', // 모델의 이름
  type: 'document',
  fields: [
    {
      title: 'Username', // studio ui에서 보는 이름
      name: 'username', // 실제 데이터베이스에 접근할 때 쓰는 이름
      type: 'string',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Following',
      name: 'following',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(), // 중복 x
    },
    {
      title: 'Followers',
      name: 'followers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule) => Rule.unique(), // 중복 x
    },
    {
      title: 'Bookmarks',
      name: 'bookmars',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
      validation: (Rule) => Rule.unique(), // 중복 x
    },
  ],
}
