import { QuizBuilder } from "@components/QuizBuilder/QuizBuilder"
import Typography from "@components/Text"
import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

const Home = () => {
  return (
    <MainContainer>
      <section css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '50%',
        '@media (max-width: 1280px)': {
          width: '100%',
        }
      }}>
        <Typography variant="title" weight="bold">Sakaba Quiz Generator</Typography>
        <Typography variant="body" color={useTheme().text.plainWhite}>
          Sakaba Quiz Generator helps you to create a quiz for your game and export the JSON to pass on to the developers. This helps speed up the process of getting
          your quiz into Sakaba's website. Simply add the questions and possible answers and click on the export button to get the JSON. Then send the JSON over to the team.
        </Typography>
        <Typography variant="body" color={useTheme().text.plainWhite}>
        Sakeba Quiz Generator は、ゲームのクイズを作成し、JSON をエクスポートして開発者に渡すのに役立ちます。これにより、取得プロセスのスピードアップが可能になります。
          あなたのクイズをSakabaのWebサイトに入力してください。質問と考えられる回答を追加し、エクスポート ボタンをクリックするだけで JSON を取得できます。次に、JSON をチームに送信します。  
        </Typography>
      </section>
      <QuizBuilder />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10rem;
  
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

export default Home
