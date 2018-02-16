live:
	aws s3 sync build s3://pudding.cool/2018/02/waveforms --delete --cache-control 'max-age=31536000' --exclude '*.html'
	aws s3 cp build/index.html s3://pudding.cool/2018/02/waveforms/index.html
	aws cloudfront create-invalidation --distribution-id E13X38CRR4E04D --paths '/2018/02/waveforms*'