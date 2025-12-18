"use client"

import React, {useEffect} from 'react';
import Image from "next/image";
import {LayoutGrid, Search, ShoppingBag} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import globalApi from "@/app/_utils/GlobalApi.jsx";

function Header() {
    useEffect(()=>{
        getCategoryList();
    }, [])
    
    const getCategoryList = () => {
      globalApi.getCategory().then(res =>{
          console.log(res)
      })
    }
    
    return (
        <div className={'flex p-5 shadow-sm justify-between'}>
            <div className="flex items-center gap-8">
                <Image src='/logo.jpg' alt='logo' width={150} height={100}/>


                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <h2 className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 outline-none cursor-pointer'>
                            <LayoutGrid className='h-5 w-5'/> Category
                        </h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className='md:flex gap-3 items-center border rounded-full p-2 px-5 hidden '>
                    <Search/>
                    <input type="text" placeholder='search' className='outline-none'/>
                </div>
            </div>

            <div className={'flex gap-5 items-center'}>
                <h2 className={'flex gap-2 items-center text-lg '}><ShoppingBag/> 0</h2>

                <Button>Login</Button>
            </div>
        </div>
    );
}

export default Header;