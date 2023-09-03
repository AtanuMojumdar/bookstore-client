import { NextResponse } from 'next/server'

export function middleware(req) {
    const path = req.nextUrl.pathname;

    const isPublicPath = path === '/login' ||path === '/signup';
    const token = req.cookies.get('jwt')?.value || '';
    const global = path ==='/';
    // console.log(token)

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/profile',req.nextUrl))
    }

    if(!isPublicPath && !token){
        if(!global){
            return NextResponse.redirect(new URL('/login',req.nextUrl))
        }
    }

}

export const config = {
    matcher: [
        '/',
        '/profile',
        '/signup',
        '/login',
    ],
}