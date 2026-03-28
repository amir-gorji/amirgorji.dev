// import { BlogCard } from '@/components/BlogCard';
import { SocialLinks } from '@/components/SocialLinks';
// import { getAllPosts } from '@/lib/posts';
import Image from 'next/image';

export default async function Home() {
  // const posts = await getAllPosts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'Amir Gorji',
        url: 'https://amirgorji.dev',
      },
      {
        '@type': 'Person',
        name: 'Amir Gorji',
        url: 'https://amirgorji.dev',
        jobTitle: 'Senior Software Engineer',
      },
    ],
  };

  return (
    <div className='space-y-16 py-12'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Profile Section */}
      <section className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>
        <Image
          src='/me.jpeg'
          alt='Amir Gorji'
          width={96}
          height={96}
          className='w-38 h-38 rounded-full object-cover shrink-0'
          priority
        />
        <div className='text-center sm:text-left'>
          <h1 className='text-3xl font-bold text-foreground'>
            Hi, I&apos;m Amir Gorji
          </h1>
          <p className='mt-3 text-lg text-muted max-w-lg'>
            Software engineer passionate about building great products. Welcome
            to my corner of the internet where I share my thoughts and
            experiences.
          </p>
          <div className='mt-4'>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section>
        <h2 className='text-2xl font-bold text-foreground mb-6'>
          Latest Posts
        </h2>
        <p className='text-muted'>Coming soon.</p>
        {/* {posts.length > 0 ? (
          <div className='grid gap-4'>
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        ) : (
          <p className='text-muted'>No posts yet. Check back soon!</p>
        )} */}
      </section>
    </div>
  );
}
