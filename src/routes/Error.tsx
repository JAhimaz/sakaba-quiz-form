import styled from "@emotion/styled"

const Error404 = styled(
  ({ className }: { className?: string }) => (
    <section className={`main ${className}`}>
      <span className="heading">404</span>
      <span className="subheading">Page Not Found</span>
    </section>
  )
)`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .heading {
    font-size: 10rem;
    font-weight: 700;
  }

  .subheading {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.text.plain};
    text-align: center;
  }

  @media (max-width: 768px) {
    .heading {
      font-size: 5rem;
    }

    .subheading {
      font-size: 1.25rem;
    }
  }
`

export default Error404