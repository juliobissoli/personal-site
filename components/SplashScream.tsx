import LogoAnimated from "./common/logo-animated/LogoAnimated";

export function SplashScream () {
    return (
        <div className="relative w-[100vw] h-[100vh] bg bg-zinc-900 text-center fixed top-0 z-50">
            <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <LogoAnimated />
            </div>
        </div>
    )
}