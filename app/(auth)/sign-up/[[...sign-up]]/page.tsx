import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'

export default function Page() {
  return(
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
        <div className='h-full lg:flex flex-col items-center justify-center px-4'>
            <div className='text-center space-y-4 pt-16'>
                <h1 className='font-bold text-3xl text-[#2E2A47]'>
                    Bem-vindo de volta!
                </h1>
                <p className='text-base text-[#7E8CA0]'>
                    Iniciar Sessão ou Criar Conta para acessar seu dashboard!
                </p>
            </div>
            <div className='flex items-center justify-center mt-8'>
                <ClerkLoaded>
                    <SignUp />
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className='animate-spin text-muted-foreground' />
                </ClerkLoading>
            </div>
        </div>
        <div className='h-full bg-[#17CF97] hidden lg:flex items-center justify-center'>
            <Image src='/logoipsum-225.svg' height={100} width={100} alt='Logo'/>
        </div>
    </div>
  ) 
}