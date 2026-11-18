import PageHero from '../components/PageHero'
import { ButtonLink } from '../components/ui'

export default function NotFound() {
  return (
    <>
      <title>Page not found | Veritas Legal</title>
      <meta name="robots" content="noindex" />
      <PageHero crumb="404" eyebrow="Error 404" title="This page has left the courtroom" text="The page you are looking for may have moved or no longer exists.">
        <div className="flex flex-col gap-3 xs:flex-row">
          <ButtonLink to="/">Back to home</ButtonLink>
          <ButtonLink to="/contact" variant="glass">
            Contact us
          </ButtonLink>
        </div>
      </PageHero>
      <main id="main" />
    </>
  )
}
