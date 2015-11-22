#!/bin/bash
set -e

if [ "$1" = 'run' ]; then
	exec gosu app npm "$@"
fi

exec "$@"
