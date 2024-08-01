/* esm.sh - esbuild bundle(@anthropic-ai/sdk@0.22.0/error) denonext production */
import{castToError as y}from"/v135/@anthropic-ai/sdk@0.22.0/denonext/core.js";var x=class extends Error{},c=class s extends x{constructor(e,n,u,t){super(`${s.makeMessage(e,n,u)}`),this.status=e,this.headers=t,this.error=n}static makeMessage(e,n,u){let t=n?.message?typeof n.message=="string"?n.message:JSON.stringify(n.message):n?JSON.stringify(n):u;return e&&t?`${e} ${t}`:e?`${e} status code (no body)`:t||"(no status code or body)"}static generate(e,n,u,t){if(!e)return new r({cause:y(n)});let i=n;return e===400?new d(e,i,u,t):e===401?new f(e,i,u,t):e===403?new o(e,i,u,t):e===404?new p(e,i,u,t):e===409?new g(e,i,u,t):e===422?new w(e,i,u,t):e===429?new l(e,i,u,t):e>=500?new a(e,i,u,t):new s(e,i,u,t)}},m=class extends c{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0),this.status=void 0}},r=class extends c{constructor({message:e,cause:n}){super(void 0,void 0,e||"Connection error.",void 0),this.status=void 0,n&&(this.cause=n)}},h=class extends r{constructor({message:e}={}){super({message:e??"Request timed out."})}},d=class extends c{constructor(){super(...arguments),this.status=400}},f=class extends c{constructor(){super(...arguments),this.status=401}},o=class extends c{constructor(){super(...arguments),this.status=403}},p=class extends c{constructor(){super(...arguments),this.status=404}},g=class extends c{constructor(){super(...arguments),this.status=409}},w=class extends c{constructor(){super(...arguments),this.status=422}},l=class extends c{constructor(){super(...arguments),this.status=429}},a=class extends c{};export{r as APIConnectionError,h as APIConnectionTimeoutError,c as APIError,m as APIUserAbortError,x as AnthropicError,f as AuthenticationError,d as BadRequestError,g as ConflictError,a as InternalServerError,p as NotFoundError,o as PermissionDeniedError,l as RateLimitError,w as UnprocessableEntityError};
//# sourceMappingURL=error.js.map