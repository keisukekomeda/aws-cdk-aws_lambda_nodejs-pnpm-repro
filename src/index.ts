import type {
  CloudFrontResponseCallback,
  CloudFrontResponseEvent,
  CloudFrontResponseResult,
  Context,
} from "aws-lambda";
import sharp from "sharp";

export const main = async (
  event: CloudFrontResponseEvent,
  _context: Context,
  callback: CloudFrontResponseCallback,
): Promise<CloudFrontResponseResult | void> => {
  const { response, request } = event.Records[0].cf;
  console.log(`input status code: ${response.status}`);

  // do something by sharp
  const transformer = sharp("", {
    sequentialRead: true,
  });
  transformer.rotate();

  callback(null, {
    ...response,
    status: "200",
    headers: {
      ...response.headers,
      "cache-control": [
        {
          key: "Cache-Control",
          value: "public, max-age=2628000",
        },
      ],
    },
  });
};

