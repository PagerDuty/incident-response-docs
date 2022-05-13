# https://circleci.com/docs/2.0/circleci-images/#python
# We may as well use the same image we use for actually deploying our sites.
FROM cimg/python:3.9.2

# Dependencies
RUN pip3 install mkdocs pymdown-extensions pygments

# Install the PagerDuty theme.
WORKDIR /tmp
RUN git clone https://github.com/pagerduty/mkdocs-theme-pagerduty \
    && cd mkdocs-theme-pagerduty \
    && python3 setup.py install

# Set our working directory and user
WORKDIR /docs
RUN useradd -m --uid 1000 mkdocs
USER mkdocs

# Expose MkDocs server
EXPOSE 8000

# Start the local MkDocs server.
ENTRYPOINT ["mkdocs"]
CMD ["serve", "--dev-addr=0.0.0.0:8000"]
