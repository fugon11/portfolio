import styles from '@/styles/PostList/Post.module.css'
import { Post as PostType } from '../../@types/Post'
import Link from 'next/link'
import Tag from '../Shared/Tag'

interface PostProps {
  post: PostType
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={styles['post']}>
      <div className={styles['post__data']}>
        <Link
          href={{
            pathname: '/posts/[slug]',
            query: {
              slug: post.slug,
            },
          }}
          className={styles['post__title']}
        >
          {post.frontmatter.title}
        </Link>
        <div className={styles['post__meta']}>
          <div className={styles['post__date']}>{post.frontmatter.date}</div>
          <div className={styles['post__tags']}>
            {post.frontmatter.tags.length > 0 &&
              post.frontmatter.tags.map((tag) => (
                <Tag value={tag} key={`tag-${post.slug}-${tag}`} />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
