/**
 * The scopes to request as part of the OAuth flow with Contentful.
 * These scopes are required to access Contentful data.
 *
 * @see https://www.canva.dev/docs/apps/authenticating-users/oauth/#overview - for more information about using external OAuth.
 * @see https://www.contentful.com/developers/docs/references/authentication/#scopes - for Contentful OAuth scopes.
 */
export const scope = new Set(["content_management_manage"]);
