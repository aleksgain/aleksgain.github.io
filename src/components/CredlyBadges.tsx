async function getBadges() {
  const res = await fetch('https://www.credly.com/users/alexey-gain/badges.json')
  if (!res.ok) throw new Error('Failed to fetch badges')
  return res.json()
}

export async function CredlyBadges() {
  const badges = await getBadges()
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {badges.map((badge: any) => (
        <div key={badge.id} className="border rounded-lg p-4">
          <Image
            src={badge.image_url}
            alt={badge.name}
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-center mt-2 font-medium">{badge.name}</h3>
        </div>
      ))}
    </div>
  )
} 