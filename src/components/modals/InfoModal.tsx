import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como Jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivina la palabra en 6 intentos. Después de cada intento, el color de
        las fichas se cambia para mostrar qué tan cerca estuvo de acertar la
        palabra.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="P" />
        <Cell value="E" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra C está en la palabra y en el lugar correcto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" />
        <Cell value="R" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="N" />
        <Cell value="." />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra A está en la palabra pero en el lugar equivocado.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="J" />
        <Cell value="U" />
        <Cell value="K" />
        <Cell isRevealing={true} isCompleted={true} value="D" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra D no está en la palabra en ningún lugar.{' '}
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Puedes entrar a la comunidad de MDC para ver mas pendejadas suyas -{' '}
        <a href="https://discord.gg/fpheq7JYt3" className="underline font-bold">
          Discord
        </a>{' '}
      </p>
    </BaseModal>
  )
}
