import { FaLinkedin, FaGithub, FaMedal } from 'react-icons/fa'

export function SocialBar() {
  return (
    <div className="flex gap-6">
      <a
        href="https://www.linkedin.com/in/alexey-gain-731b39171/"
        target="_blank"
        rel="noreferrer"
        className="text-3xl hover:text-blue-600 transition-colors"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/aleksgain"
        target="_blank"
        rel="noreferrer"
        className="text-3xl hover:text-gray-600 transition-colors"
      >
        <FaGithub />
      </a>
      <a
        href="https://credly.com/users/alexey-gain"
        target="_blank"
        rel="noreferrer"
        className="text-3xl hover:text-yellow-500 transition-colors"
      >
        <FaMedal />
      </a>
    </div>
  )
} 