import styled from "@emotion/styled";

const LoadingDiamond = styled(
  ({ className }: { className?: string }) => (
    <span className={`loader ${className}`} />
  )
)`
    position: relative;
    width: 64px;
    height: 64px;
    background-color: rgba(0, 0, 0, 0.5);
    transform: rotate(45deg);
    overflow: hidden;

    :after{
      content: '';
      position: absolute;
      inset: 8px;
      margin: auto;
      background: ${({ theme }) => theme.background};
    }

    :before{
      content: '';
      position: absolute;
      inset: -15px;
      margin: auto;
      background: ${({ theme }) => theme.text.highlight};
      animation: diamondLoader 1.5s linear infinite;
    }

    @keyframes diamondLoader {
      0%  ,5% {
        transform: translate(-64px , -64px) rotate(-45deg)
      }
      45% , 50% {
        transform: translate(0px , 0px) rotate(-45deg)
      }

      // go back to start
      95% , 100% {
        transform: translate(70px , 70px) rotate(-45deg)
      }

    }
`

export default LoadingDiamond