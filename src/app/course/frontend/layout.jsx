export const metadata = {
    title: 'course information',
    description: 'about frontend',
  }

export default function layout({children}) {
  return (
    <div className="flex space-x-2">
        {children}
    </div>
  )
}
