import { useEffect } from 'react'

/**
 * Adiciona a classe "is-visible" aos elementos [data-reveal] quando entram na tela.
 * Inclui MutationObserver para garantir suporte a elementos adicionados dinamicamente.
 */
export default function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' },
    )

    const observeAll = () => {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
        io.observe(el)
      })
    }

    observeAll()

    // Observa adições dinâmicas de nós no DOM
    const mo = new MutationObserver(() => {
      observeAll()
    })

    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
