
exec 6>&1;output="go"; while [ "$output" ]; do output=$(find "$HOME/Odrive/" \( -name "*.cloud" -or -name "*.cloudf" \) -exec python "$HOME/.odrive-agent/bin/odrive.py" sync "{}" \;|tee /dev/fd/6); done