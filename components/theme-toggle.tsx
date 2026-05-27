"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() { 
    const mounted = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot,
    );
    const { setTheme, resolvedTheme } = useTheme()

    if (!mounted) {
        return null
    }
    return (
        <Button
            size='sm'
            variant='ghost'
            onClick={() => {
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

            }}
        >
            {resolvedTheme === 'dark' ? (
                <SunIcon className='size-4 text-orange-300' />
            ) : (
                <MoonIcon className='size-4 text-sky-950' />
            )}

                <span className='sr-only'>Toggle theme</span>
        </Button>
    )
}
