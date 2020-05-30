import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>kitified</title>
      </Head>

      <div class="max-w-lg mx-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div class="ml-6 pt-1">
          <h4 class="text-xl text-gray-900 leading-tight">kitified</h4>
          <br/>
          <p class="text-base text-gray-600 leading-normal">
            Hi there! My name is Kit and I'm an engineer at <a href="https://fossa.com/">FOSSA</a>.
            If I'm not programming I'm probably playing games or reading.
          </p>
          <br/>
          <p class="text-base text-gray-600 leading-normal">
            I plan to update this site more in the future. It's currently just a
            landing page for my email domain.
          </p>
        </div>
      </div>
    </div>
  )
}
