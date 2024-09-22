import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <div className="max-w-20">
          <Logo className="h-6 w-10 text-slate-900" />
        </div>
        <p className="mt-6 text-base text-orange-900 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} NIDHOG RULES
        </p>
      </Container>
    </footer>
  )
}
