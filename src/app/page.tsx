import Image from 'next/image'
import { SocialBar } from '@/components/SocialBar'
import { CredlyBadges } from '@/components/CredlyBadges'
import { GithubStats } from '@/components/GithubStats'
import { LinkedInPosts } from '@/components/LinkedInPosts'

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I&apos;m Alex
        </h1>
        <p className="text-xl mb-8">
          And I&apos;m good at running stuff in the cloud
        </p>
        
        <SocialBar />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
            <CredlyBadges />
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">GitHub Activity</h2>
            <GithubStats />
          </section>
          
          <section className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Recent Updates</h2>
            <LinkedInPosts />
          </section>
        </div>
      </div>
    </main>
  )
} 