#ifndef __CANVEX_C_API_H__
#define __CANVEX_C_API_H__ 1

#include <stddef.h>
#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

typedef enum {
  CanvexRenderSuccess = 0,
  CanvexRenderError_InvalidArgument_JSONInput,
  CanvexRenderError_InvalidArgument_ImageOutput,
  CanvexRenderError_InvalidArgument_ResourceContext,
  CanvexRenderError_JSONParseFail,
  CanvexRenderError_GraphicsUnspecifiedError = 1024
} CanvexRenderResult;

typedef void *CanvexResourceCtx;


/*
  A context must be created before rendering.
  This call may init any resources that can be reused across rendering calls (e.g. fonts).

  If resourceDir is null or empty, will attempt to use path "res" under current working dir.
*/
CanvexResourceCtx CanvexResourceCtxCreate(
  const char *resourceDir
);

/*
  Releases memory used by the context.
*/
void CanvexResourceCtxDestroy(CanvexResourceCtx);


/*
  Renders the given JSON display list into the image buffer specified by the dstImage* args.
  Returns a CanvexRenderResult value (0 on success or an error id).

  The image will be written with RGBA memory layout,
  i.e. dstImageData[0] is a red component regardless of system endianness.

  If dstImageRowBytes==0, the default value will be dstImageW * 4.
  ("rowBytes" is also known as "stride", "step" or "row offset" in other APIs.)

  An empty or null input json string will return CanvexRenderError_InvalidArgument_JSONInput.
*/
CanvexRenderResult CanvexRenderJSON_RGBA(
  CanvexResourceCtx resourceCtx,
  const char *json,
  uint8_t *dstImageData,
  uint32_t dstImageW,
  uint32_t dstImageH,
  uint32_t dstImageRowBytes
);

/*
  Renders the given JSON display list into the image buffer specified by the dstImage* args.
  Returns a CanvexRenderResult value (0 on success or an error id).

  The image will be written with BGRA memory layout,
  i.e. dstImageData[0] is a red component regardless of system endianness.

  If dstImageRowBytes==0, the default value will be dstImageW * 4.
  ("rowBytes" is also known as "stride", "step" or "row offset" in other APIs.)

  An empty or null input json string will return CanvexRenderError_InvalidArgument_JSONInput.
*/
CanvexRenderResult CanvexRenderJSON_BGRA(
  CanvexResourceCtx resourceCtx,
  const char *json,
  uint8_t *dstImageData,
  uint32_t dstImageW,
  uint32_t dstImageH,
  uint32_t dstImageRowBytes
);

#ifdef __cplusplus
}
#endif

#endif
