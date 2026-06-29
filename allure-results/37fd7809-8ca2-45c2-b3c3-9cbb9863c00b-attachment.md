# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: skip.test.ts >> Login test3
- Location: tests\skip.test.ts:23:1

# Error details

```
Error: browserContext.close: Test ended.
Browser logs:

<launching> C:\Users\janan\AppData\Local\ms-playwright\firefox-1532\firefox\firefox.exe -no-remote -headless -profile C:\Users\janan\AppData\Local\Temp\playwright_firefoxdev_profile-nhEN2j -juggler-pipe -silent
<launched> pid=21140
[pid=21140][err] *** You are running in headless mode.
[pid=21140][err] JavaScript warning: resource://services-settings/Utils.sys.mjs, line 119: unreachable code after return statement
[pid=21140][out] 
[pid=21140][out] Juggler listening to the pipe
[pid=21140][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: RenderCompositorSWGL failed mapping default framebuffer, no dt (t=1.51346) [GFX1-]: RenderCompositorSWGL failed mapping default framebuffer, no dt
[pid=21140][err] JavaScript error: chrome://juggler/content/Helper.js, line 82: NS_ERROR_FAILURE: Component returned failure code: 0x80004005 (NS_ERROR_FAILURE) [nsIWebProgress.removeProgressListener]
```