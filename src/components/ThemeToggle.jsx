import { useState } from 'react'

const ThemeToggle = () => {
  const [dark, setDark] = useState(true)
  const changeTheme = (theme) =>
    document.querySelector('html[data-theme]').setAttribute('data-theme', theme)

  const handleChange = () => {
    setDark((prev) => !prev)
    if (!dark) {
      changeTheme('dark')
    } else {
      changeTheme('light')
    }
  }
  return (
    <input
      value={!dark}
      onChange={handleChange}
      type="checkbox"
      className="toggle fixed right-5 top-5 theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
    />
  )
}
export default ThemeToggle
