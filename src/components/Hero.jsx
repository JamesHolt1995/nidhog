import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      {/* <BackgroundImage className="-bottom-14 -top-36" /> */}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-slate-200 sm:text-7xl">
            <span className="sr-only"></span>Nidhog in{' '}
            <span className="text-orange-400">Leeds!</span>
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-slate-200">
            <p>
              It&apos;s time to get you Nid on! come on down to our Leeds
              tournament at Hicks Hall!
            </p>
            <p className="text-orange-300">
              At Nidhog Leeds all your dreams will come true. We will also serve
              a hog roast.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            SOLD OUT!
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['People Attending', '2,091'],
              ['Venue', 'Hicks Hall'],
              ['Location', 'Leeds'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-orange-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-orange-400">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
