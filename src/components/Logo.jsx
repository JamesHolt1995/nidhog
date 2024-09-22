import Image from 'next/image'

import logoImage from '@/images/Nidhogg_video_game_logo.png'

export function Logo(props) {
  return <Image src={logoImage} alt="" />
}
