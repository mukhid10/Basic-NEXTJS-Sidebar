'use client'

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useState } from 'react';
import Link from "next/link"

function CSidebar() {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('')
  return (
        <Sidebar collapsed={open} className="h-screen">
            <nav className="h-full flex flex-col bg-slate-400 border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                <img
                    src="https://img.logoipsum.com/243.svg"
                    className={`overflow-hidden transition-all w-32`}
                    alt=""
                />
                <button
                    className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    onClick={()=>setOpen(!open)}
                >
                    {open ? <ChevronLast /> : <ChevronFirst />}
                </button>
                </div>

                <Menu>
                    <SubMenu label="Charts">
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem className={active == 'Documentation' ? 'bg-orange-300 hover:bg-orange-300' : ''} onClick={()=>setActive('Documentation')}> Documentation </MenuItem>
                    <MenuItem className={active == 'Calendar' ? 'bg-orange-300 hover:bg-orange-300' : ''} onClick={()=>setActive('Calendar')}> Calendar </MenuItem>
                    {/* <Link href='/posts'> */}
                        <MenuItem className={active == 'Posting' ? 'bg-orange-300 hover:bg-orange-300' : ''} onClick={()=>setActive('Posting')}> Posting </MenuItem>
                    {/* </Link> */}
                    <MenuItem className={active == 'Albums' ? 'bg-orange-300 hover:bg-orange-300' : ''} onClick={()=>setActive('Albums')}> Albums </MenuItem>
                </Menu>
                <div className='flex h-full items-end'>
                    <div className="border-t flex p-3">
                        <img
                            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                            alt=""
                            className="w-10 h-10 rounded-md"
                        />
                        <div
                            className={`
                            flex justify-between items-center
                            overflow-hidden transition-all w-52 ml-3
                        `}
                        >
                            <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                            </div>
                            <MoreVertical size={20} />
                        </div>
                    </div>
                </div>
            </nav>
        </Sidebar>
  )
}

export default CSidebar

