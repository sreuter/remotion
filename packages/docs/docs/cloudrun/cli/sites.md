---
image: /generated/articles-docs-cloudrun-cli-sites.png
id: sites
sidebar_label: sites
title: "npx remotion cloudrun sites"
slug: /cloudrun/cli/sites
crumb: "Cloud Run CLI Reference"
---

<ExperimentalBadge>
<p>Cloud Run is in <a href="/docs/cloudrun-alpha">Alpha</a>, which means APIs may change in any version and documentation is not yet finished. See the <a href="https://remotion.dev/changelog">changelog to stay up to date with breaking changes</a>.</p>
</ExperimentalBadge>

The `npx remotion cloudrun sites` command allows to create, view and delete Remotion projects in your Cloud Storage bucket.

- [`create`](#create)
- [`ls`](#ls)
- [`rm`](#rm)
- [`rmall`](#rmall)

## create

```
npx remotion cloudrun sites create src/index.ts
```

Bundle and upload a Remotion video to a Cloud Storage bucket.

The result will be a URL such as `https://storage.googleapis.com/remotioncloudrun-12345/sites/mySite123/index.html`.

:::note
If you make changes locally, you need to redeploy the site. Use [`--site-name`](#--site-name) to overwrite an existing site.
:::

You can use this "Serve URL" to render a video on Remotion Cloud Run using:

- The [`npx remotion cloudrun render`](/docs/cloudrun/cli/render) command.
- Locally using the [`renderMedia()`](/docs/renderer/render-media) and [`renderStill()`](/docs/renderer/render-still) functions.
- Locally using the [`npx remotion render`](/docs/cli) and [`npx remotion still`](/docs/cli) commands

If you are rendering on Cloud Run, you can also pass the site Name (in this case `mySite123`) as an abbreviation.

<details>
<summary>
Example output
</summary>
<pre>
(1/3) [====================] Bundled video 3975ms<br/>
(2/3) [====================] Created bucket 457ms<br/>
(3/3) [====================] Uploaded to GCP Storage Bucket 25118ms<br/>
<br/>
Deployed to GCP Cloud Storage!<br/><br/>
Site:            mySite123<br/>
Bucket:          remotioncloudrun-12345<br/>
Region:          us-east1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-12345/sites/mySite123/index.html<br/>
</pre>
</details>

### `--region`

The [GCP region](/docs/cloudrun/region-selection) to select. The service accessing the site should also be in this same region to minimise latency.

### `--site-name`

Uploads the project to a specific directory and returns a deterministic URL. If a site already existed under this name, in the same region, it will be overwritten. Can only contain the following characters: `0-9`, `a-z`, `A-Z`, `-`, `!`, `_`, `.`, `*`, `'`, `(`, `)`

```
npx remotion cloudrun sites create src/index.ts --site-name=another-site
```

<details>
<summary>
Example output
</summary>
<pre>
(1/3) [====================] Bundled video 3975ms<br/>
(2/3) [====================] Created bucket 457ms<br/>
(3/3) [====================] Uploaded to Cloud Storage 25118ms<br/>
<br/>
Deployed to GCP Cloud Storage!<br/><br/>
Site:            another-site<br/>
Bucket:          remotioncloudrun-12345<br/>
Region:          us-east1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-12345/sites/another-site/index.html<br/>
</pre>
</details>

## ls

```
npx remotion cloudrun sites ls
```

Get a list of sites. The URL that is printed can be passed to the `render` command to render a video.

<details>
<summary>
Example output
</summary>
<pre>
2 sites in us-east1, in the remotion-example project.<br/><br/>
Site:            another-site<br/>
Bucket:          remotioncloudrun-12345<br/>
Region:          us-east1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-12345/sites/another-site/index.html<br/><br/>
Site:            test-site<br/>
Bucket:          remotioncloudrun-12345<br/>
Region:          us-east1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-12345/sites/test-site/index.html<br/>
</pre>
</details>

### `--region`

The [GCP region](/docs/cloudrun/region-selection) to list sites from.

### `--all-regions`,

Ignores region, returning sites across all regions for the project.

```
npx remotion cloudrun sites ls --all-regions
```

<details>
<summary>
Example output
</summary>
<pre>
3 sites in all regions, in the remotion-example project.<br/><br/>
Site:            another-site<br/>
Bucket:          remotioncloudrun-12345<br/>
Region:          us-east1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-12345/sites/another-site/index.html<br/><br/>
Site:            test-site<br/>
Bucket:          remotioncloudrun-12345<br/>
Region:          us-east1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-12345/sites/test-site/index.html<br/><br/>
Site:            central-site<br/>
Bucket:          remotioncloudrun-abcdefgh<br/>
Region:          us-central1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-abcdefgh/sites/central-site/index.html
</pre>
</details>

### `--quiet`, `-q`

Returns only a list of space-separated sites.

```
npx remotion cloudrun sites ls -q
```

<details>
<summary>
Example output
</summary>
<pre>
another-site test-site central-site<br/>
</pre>
</details>

## rm

Removes a site (or multiple) from Cloud Storage by it's ID.

```bash
npx remotion cloudrun sites rm central-site
npx remotion cloudrun sites rm central-site another-site # multiple at once
```

<details>
<summary>
Example output
</summary>
<pre>
Site:            central-site<br/>
Bucket:          remotioncloudrun-abcdefgh<br/>
Region:          us-central1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-abcdefgh/sites/central-site/index.html<br/><br/>
Delete? (Y/n) Y<br/>
Deleted site central-site from bucket remotioncloudrun-abcdefgh.
<br/>
</pre>
</details>

### `--region`

The [GCP region](/docs/cloudrun/region-selection) to remove sites from.

:::note
The `rm` command does not support the --all-regions flag, as it is possible to have the same site name in multiple regions. This makes it difficult to remove multiple site-names from multiple regions.
:::

### `--yes`, `-y`

Removes a site (or multiple) without asking for confirmation.

```
npx remotion cloudrun sites rm central-site -y
```

## rmall

Remove all sites in the selected GCP project.

```bash
npx remotion cloudrun sites rmall
```

<details>
<summary>
Example output
</summary>
<pre>
Retrieving sites in us-east1.<br/><br/>
Site:            another-site<br/>
Bucket:          remotioncloudrun-12345<br/>
Region:          us-east1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-12345/sites/another-site/index.html<br/><br/>
Delete? (Y/n) n<br/>
Skipping site - another-site.<br/><br/><br/>
Site:            test-site<br/>
Bucket:          remotioncloudrun-12345<br/>
Region:          us-east1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-12345/sites/test-site/index.html<br/><br/>
Delete? (Y/n) n<br/>
Skipping site - test-site.
</pre>
</details>

### `--region`

The [GCP region](/docs/cloudrun/region-selection) to remove all sites from.

### `--all-regions`,

Ignores region, removing sites across all regions for the project.

```
npx remotion cloudrun sites rmall --all-regions
```

<details>
<summary>
Example output
</summary>
<pre>
Retrieving sites in all regions.<br/><br/>
Site:            another-site<br/>
Bucket:          remotioncloudrun-12345<br/>
Region:          us-east1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-12345/sites/another-site/index.html<br/><br/>
Delete? (Y/n) n<br/>
Skipping site - another-site.<br/><br/><br/>
Site:            test-site<br/>
Bucket:          remotioncloudrun-12345<br/>
Region:          us-east1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-12345/sites/test-site/index.html<br/><br/>
Delete? (Y/n) n<br/>
Skipping site - test-site.<br/><br/><br/>
Site:            central-site<br/>
Bucket:          remotioncloudrun-abcdefgh<br/>
Region:          us-central1<br/>
Serve Url:       https://storage.googleapis.com/remotioncloudrun-abcdefgh/sites/central-site/index.html<br/><br/>
Delete? (Y/n) n<br/>
Skipping site - central-site.
</pre>
</details>

### `--yes`, `-y`

Removes all sites without asking for confirmation.

```
npx remotion cloudrun sites rmall -y
```
