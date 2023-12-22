import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

const devUrl = "http://localhost:3000";
const websiteUrl = "https://neuronstudios.org";

export async function GET(request: Request) {
  try {
    const fontData = await fetch(
      new URL("../../assets/font/Inter-Bold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div tw="flex flex-col w-full h-full items-center justify-center bg-black">
          <div tw="bg-black flex w-full">
            <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
              <h2 tw="flex flex-col text-4xl sm:text-4xl font-extrabold tracking-tight text-gray-100 text-left">
                <span style={{ fontFamily: "Inter" }}>Neuron Studios</span>
                <span tw="text-yellow-300" style={{ fontFamily: "Inter" }}>
                  Our Discord
                </span>
              </h2>
              <div tw="mt-8 flex md:mt-0">
                <div tw="flex rounded-md shadow">
                  <img
                    tw="opacity-20"
                    src={`${websiteUrl}/neuron.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    return new Response("Failed to generate Opengraph Image", { status: 500 });
  }
}
