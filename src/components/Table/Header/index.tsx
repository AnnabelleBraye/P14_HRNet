type HeaderProps = {
  title: string,
}

const Header = ({title}: HeaderProps) => {
  return (
    <th className="text-start text-blue-grey font-normal p-4">{title}</th>
  )
}

export default Header