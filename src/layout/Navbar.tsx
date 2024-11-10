import { Breadcrumb } from "antd"
import { ReactNode } from "react"

export const Navbar = () =>{
    const breadcrumbItems: {title:ReactNode}[] = [{title: <a href="/home">Home</a>}]

    return <Breadcrumb items={breadcrumbItems} className="breadcrumbs" />

}