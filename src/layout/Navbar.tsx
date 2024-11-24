import { Breadcrumb } from "antd"
import { ReactNode } from "react"
import './../styles/Navbar.scss'

export const Navbar = () =>{
    const breadcrumbItems: {title:ReactNode}[] = [
        {title: <a href="/home">Home</a>},
        {title: <a href="/cast-and-characters">Cast and characters</a>},
        {title: <a href="/best-episodes">Best episodes</a>},
        {title: <a href="/quiz">Quiz</a>},
    ]

    return <Breadcrumb items={breadcrumbItems} className="breadcrumbs" />
}